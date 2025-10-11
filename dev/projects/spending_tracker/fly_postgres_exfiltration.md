---
date: "2025-08-30"
title: "Exfiltrating Data from Fly.io Postgres"
tags: [dev, projects, spending_tracker]
layout: _post.html
---

I'm writing this mainly as a reminder for myself, since I'm pretty sure I'll continue procrastinating the Spending Tracker rewrite to Cloudflare/Svelte and need to do this again in the future. But maybe someone else finds themselves in the same situation and by some SEO miracle lands on this article rather than piecing together info from forum posts like I did. Or they just ask our LLM overlords and this is in the training data, either way.

Quick note, this is for their legacy Postgres because that's what I used/it was all they offered at the time. Not sure if this works for their managed postgres and there are probably better ways to do it there anyway.

First step is to open a proxy connection between your DB server and local environment so you can actually save the data with `flyctl proxy 15432:5432 -a <db-server-name>`. `5432` is the default database port for postgres, while `15432` is what you'll access it through on your local machine. You can use anything instead of `15432` as long as it's not already in use, but `5432` isn't likely to change unless you changed it. `<db-server-name>` is not the name of your actual database, its the name you see in the Fly dasboard for the server your PG instance is running on.

Now that you have a connection between your machine and the database, open another tab while the proxy is running and get to exfiltrating. I did this two different ways:

## `pg_dump`

Initially I though I'd just dump the whole database and recreate it on Cloudflare, so [pg_dump](https://www.postgresql.org/docs/8.1/app-pgdump.html) was the obvious choice. It'll generate the SQl to recreate your database from scratch in another postgres instance, it doesn't destroy or alter the database at all despite the slightly scary similarity to `DROP`.

The command you want is

```
pg_dump -h localhost -p 15432 -U postgres <db_name> > <backup_name>.sql
```

Step by step, `-h` specifies the host to access, `-p` specifies the port to access on that host, `-U` is your postgres user (`postgres` by default on Fly.io but you might have changed it) and `db_name` is the name of the database you want to dump.

Your `db_name` is likely not `postgres`, which I made the mistake of guessing to start with. You can check it by running `fly postgres connect -a <db-server-name>` then `\l` to list the databases available within the postgres instance.

You'll also be asked for your password, which you can find with `fly ssh console <app-name>` and running either `echo $DATABASE_URL` to get the connection URL which contains your DB password or `echo $OPERATOR_PASSWORD` to just get the password. I'm providing the `$DATABASE_URL` option as a fallback, since `$OPERATOR_PASSWORD` seems to be a newer addition.

Once you've collected all the necessary info, just run the command and voila, you have a local SQL file you can use to recreate your DB from scratch. But what if you just want a simple representation of the data you can easily parse and modify, say for example if you did something stupid like half-heartedly trying to add budgets to a spending tracker?

## Good ol' CSV

This time we'll connect directly to `psql` on our postgres server and use the `\copy` command to dump tables as CSV. You can get into `psql` for your instance with `psql postgres://postgres:<postgres_password>@localhost:15432/<db_name>`, and list the available tables with `\dt`.

It's probably possible to write a script to loop over them and copy to CSV automatically, but since I had a total of 2 tables I cared about I just manually ran `\copy <table_name> TO '<desired_local_file_path>.csv' WITH CSV HEADER;` for each of them and I had my data in the ultimate data persistence format!

## Conclusion

Overall pretty simple, I remain impressed by Fly's CLI. I'm migrating away not because of anything wrong with their product, I found it pretty user friendly, but because I am so incredibly cheap I'd rather spend hours and hours rewriting my application to work on Cloudflare Workers than pay 5USD$ a month.
