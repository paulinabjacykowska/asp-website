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

- Instalujemy Dockera [https://docs.docker.com/get-docker/]
- W głównym folderze wykonujemy komendę `docker-compose up --build`. Komendę tę wykonujemy jedynie za pierwszym razem i za każdym razem, gdy coś doinstalowujemy (czyli gdy zmienia się package.json). Komenda ta będzie się wykonywać dość długo.
- Przy powtórnych uruchomianiach wykonujemy komendę `docker-compose up`, również w głównym folderze. Komenda ta uruchamia stronę (localhost:8000) oraz deweloperskiego strapiego (localhost:1337/admin).

### Rozwiązywanie problemów

- Po każdej zmianie treści w Strapim należy przeładować aplikację stronki
- W razie problemów z folderem `.cache`, możesz go usunąć i przeładować aplikację
- Aby przebudować CMSa należy użyć komendy `npm run build -- --clean`
