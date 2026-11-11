# Screenshot to Site

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5bad3863-d4c4-48f2-a3d6-b6690b8f7370).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```


## Chemistrecreate content editing

Festival content is centralized in `src/data/fest.ts`.

- Update `club.school` and `club.schoolAddress`.
- Update `fest.dates`, `fest.venue`, `fest.intro`, and `fest.tagline`.
- Replace the sample entries in `events` with the real events and games, including category, time, venue, and description.
- Add confirmed event times and locations to `schedule`.
- Replace the sample `contacts.members` with the real club members.
- Add the President and Vice President names and contact details in `contacts.president` and `contacts.vicePresident`.

The contact cards only show WhatsApp, phone, or email actions when a corresponding contact value is supplied. Get permission before publishing personal contact details.

The registration and separate attractions sections have been removed. The site is now organized around About, Events & Games, Schedule, Our Team, and Contact.
