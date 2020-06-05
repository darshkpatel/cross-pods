
# Inspiration

Taking inspiration from the hacker hangout mini events, we wanted a platform where fellows can meet fellows from other pods, and discuss their ideas / meet each other

# What it does

It's super simple, you login via your github account (so we know your pod) and you'd see bubbles for everyone online , once you click 'join' you'd be matched with three random fellows and redirected to a video call between you all

# How we built it

We primarily built the application using Next.Js and also utilized docusaurus for documentation , auth0 was used to setup github OAuth. Jit.si was used for the video calls ( shout-out to nquinlan for the suggestion)

# Challenges we ran into

We spent a lot of time getting the OAuth flow to work , we were using vercel ( formerly zeit ) for CD , but the serverless nature of it was posing problems , so we switched to deploying it. but had problems with the https certificate. ( Shout-out to Caddy reverse proxy for saving the day )

# Accomplishments that we're proud of

HTTPs Certificates, Documentation deployed on a subdomain, pretty bubbles which show a fellows github profile when clicked. Seamless video calls !

# What we learned

We learnt a lot about nextjs ecosystem , and how easy docusaurus is to deploy. not to mention the particulars of auth0 and OAuth flow

# What's next for CrossPods

Add a page to track proposed projects which fellows can collaborate on outside of the fellowship

# Built With
`docusaurus` `next.js`

# Try it out
- [crosspods.team](https://crosspods.team)
- [docs.crosspods.team](https://docs.crosspods.team/)

