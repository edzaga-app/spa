# app

```bash
# GENERATE A ROOT PAGE
npm run genpage -- -r page-name

# GENERATE A SIDENAV PAGE    
npm run genpage -- -n page-name

# GENERATE A PAGE THAT'S BOTH ROOT AND SIDENAV
npm run genpage -- -rn page-name

# GENERATE A CHILD SIDENAV PAGE
npm run genpage -- -c page-name

# GENERATE A SIDENAV PAGE WITH SPECIFIC ICON NAME (mat-icon)
# (The icon will be in the sidenav next to the tile of the page)
npm run genpage -- -n page-name -i home
