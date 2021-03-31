# Hockey Analytics Dashboards 

### Players (v.0.1.0 - live now)
#### Current Players
View player data for all players currently on NHL rosters

#### Historical Players
Reference information for players dating all the way back to 1917

#### Roadmap
Compare and visualize player seasons, stints (team anad league), and careers
Choose stat splits and rankings

### Teams (v0.3.0 - coming soon)
#### Current
Search for team stats and rankings for the current season

#### Historical
Search for team stats & rankings in any season going back to 1917

#### Roadmap
Compare and visualize team seasons
Choose stat splits and rankings

### Games (v0.2.0 - in testing)
By default, loads games being played today. The game table on this page allows the user to navigate to a game detail page.

#### Search for Games
Find stats and summaries from past games and see information about future games. 

#### Roadmap
Display content using the live game content endpoint 
Allow users to compare & visualize players's performances within a game, possibly even across different games


# Style Guide for Contributors
### 1. Merge Material Code Only
Only include code changes material to the functionality you're working on. If your IDE creates files or enforces certain conventions, revert them before submitting the pull request. 

### 2. Keep Your Hands to Yourself
Don't change code that doesn't need to be changed. Change or add anything that needs to be changed or added, but limit your edits to things related to your functionality. For example, don't change double quotes to single (without a good reason). If you notice a style or convention error, mistake, or inconsistency, talk with the project maintainer and address that as a separate unit of work.

### 3. Make useful updates
Check the "Projects" tab for the planned updates. The Issues tracker also has good first issues, bugs, and enhancements that need to be solved if nothing in the current project fits you. Rogue pull requests are unlikely to be accepted.


# Release Process
Create Pull Request to merge the branch with new functionality into master.
Collate screenshots and summaries of new functionality & post those release notes on the blog.
Deploy to the server.
Post linking to the release notes and the site on Twitter.

# Tech Specs
HockeyDashboards.net uses Angular 8.2 and it was generated with [Angular CLI](https://github.com/angular/angular-cli). It's currently hosted on an AWS 
EC2 with Ubuntu Server 20.04 OS and nginx 1.17.10.


