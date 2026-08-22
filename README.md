# Late Night Watchers
Late Night Watchers is a tool for helping groups decide on a movie to watch together.

As the application is not yet in a working state, this document serves more as a descriptor of what's to come. This document will be changed at a later date to reflect how to use the webapplication instead.

The license for this project is GPL v3.0 - Feel free to copy, modify, and distribute this code as long as it remains free and open-source. Please do not use this code to train language models.

### Planned Features (Subject to change)
The main feature of Late Night Watchers will be a simple algorithm that returns a suitable movie to watch based on a group's preferances.

<u>Eligible movies have to be:</u>
- In the 'to watch'-list of at least 1 member of the group. 
    - Prioritizes by highest appearance frequency within the group.
- Movies already marked as 'watched' for one member will be removed from eligibility
    - Unless that user has specifically marked it as "Willing to Rewatch"

<u>Additionally you will be able to pick:</u>
- [High priority] Which genres to include or avoid.
- [Medium priority] Preference for runtime length.
- [Low priority] Preferred language
- [Low priority] Preferred country of origin
- [Low priority] Preferred region
- [Low priority] Preferred age rating
- [Low priority] Preferred decade of release
- [Low priority] Exclusions of specific content tags such as gore, nudity, and drug usage.


<u>Possible considerations:</u>
- [Medium priority] A 'pity system' where the algorithm will prioritize one user's movies higher if movies in their 'to-watch'-list have not been picked multiple times in a row.
- [Low priority] The ability to prioritize movies recently added to a user's 'to-watch'-list higher than very old (1-2 years+) entries.
    - Reasoning: The user might have forgotten they added the movie to their list. A user is likely more excited to watch something they added last week over a movie they might have forgotten to remove from their list.
- [High priority] Disclude specific members from the algorithm. If a person in your group is not present, their preferences will be ignored. Alternatively; a "who is watching tonight" selection of active users that discludes everyone else.
- [Low priority] A wildcard toggle: the ability for the algorithm to include movies outside of the group members 'to watch'-lists.

<u>Possible integrations:</u>
- [High Priority] Letterbox'd integration for automatically adding to your list of 'already watched' movies.

### Technologies (Subject to change)
![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-%23000.svg?style=for-the-badge&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)