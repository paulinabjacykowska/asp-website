### Pierwsze uruchomienie

#### CMS
- `npm run develop`
- Odblokuj endpointy
  - W panelu admina pójdź do `Ustawienia -> USERS & PERMISSIONS PLUGIN -> Role -> Public -> Uprawniena`
  - Zaznacz metodę `find` i `findone` przy każdym endpoincie
  - Zapisz
- Skonfiguruj tłumaczenia w `/admin/settings/internationalization`. Dodaj język `pl` ustawiony jako domyślny.
- Utwórz i opublikuj dane w **każdej** kolekcji i każdego języka

#### Website

- Utwórz plik `.env` w głównym folderze, i wklej do nie go zawartość istniejącego już pliku `.env.example`. W razie potrzeby zmień wartości wklejonych zmiennych.
- `npm run develop`
- Włącz podpowiedzi GraphQL (dla osób z Webstormem)
  - Zainstaluj [plugin GraphQL](https://plugins.jetbrains.com/plugin/8097-js-graphql)
  - Otwórz plik `website/.graphqlconfig`
  - Kliknij play przy linijce 7. `"url": "http://localhost:8000/___graphql",`

#### Docker

- Nie jest on konieczny - możemy używać go np. jedynie wtedy, gdy chcemy uruchomić stronę i deweloperskiego strapiego jednocześnie.
- Instalujemy Dockera [https://docs.docker.com/get-docker/]
- W głównym folderze (nie wchodzimy ani w /website ani w /cms) wykonujemy komendę `docker-compose up --build`. Komendę tę wykonujemy jedynie za pierwszym razem i za każdym razem, gdy coś doinstalowujemy (czyli gdy zmienia się package.json). Komenda ta będzie się wykonywać dość długo.
- Przy powtórnych uruchomianiach wykonujemy komendę `docker-compose up`, również w głównym folderze. Komenda ta uruchamia stronę (localhost:8000) oraz deweloperskiego strapiego (localhost:1337/admin).

### Rozwiązywanie problemów

- Po każdej zmianie treści w Strapim należy przeładować aplikację stronki
- W razie problemów z folderem `.cache`, możesz go usunąć i przeładować aplikację
- Aby przebudować CMSa należy użyć komendy `npm run build -- --clean`

### Linki
 - CMS [https://asp-degrees.herokuapp.com/](https://asp-degrees.herokuapp.com/)
 - [Figma](https://www.figma.com/file/KPmbtxtQE3wNWB5z7dZVo2)
 - [Google Drive - wspólny z ASP](https://drive.google.com/drive/folders/10eo31TjO6MT3Tsgown5L2wDCQmSUx-xw?usp=sharing)
 - [Google Drive - prywatny](https://drive.google.com/drive/folders/1_DJ7Aw1J1JK_MEorPPnUFzAvjttZAEAi?usp=sharing)

### Heroku deploy
1.  [PostreSQL service](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html)
2.  [Subdir Buildpack config](https://github.com/timanovsky/subdir-heroku-buildpack)
3.  [Cloudinary config](https://strapi.io/blog/adding-cloudinary-support-to-your-strapi-application)
