+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
hero_path = 'images/games/{{ .File.ContentBaseName }}.png'
tags = ['games', 'review']
+++
