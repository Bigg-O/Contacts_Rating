# Contacs Rating

With given data of list of contacts that contains name, company size and title, this program will produce a new data file "ratedContacts.json" which will contain their ratings.

Ratings are evaluated by three main factors:
- Seniority level
- Company size
- Job Role

The program evaluates half of rating by prioritizing right seniority level by company size
- 1 - 50 Employees :
Executive > Senior > Mid > Mid-Entry > Entry
- 50 - 1000 Employees :
Senior > Executive > Mid > Mid-Entry > Entry
- 1001+ Employees :
Mid > Senior > Executive > Mid-Entry > Entry

## Getting Started

You can simply run "node run.js" on your terminal. This will create "ratedContacts.json" in the current directory, which will contain the contact list with ratings.

## Built With

- [Node.js](https://nodejs.org/en/)

## Author

- **Wookeun Oscar Song** - _Initial work_ - [Bigg-O](https://github.com/Bigg-O)
