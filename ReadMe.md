# Give Engine - A Software System for High-Impact Philanthropy

Welcome to the **Give Engine** repository, a software system designed to facilitate impactful charitable giving by recommending charities based on their social impact. This project is part of a BSc (Hons) Computer Science final year project by Alfie Lamerton.

## Project Overview

The goal of this project is to increase the incidence of impactful charitable giving by synthesizing a web application that recommends charities to users based on various criteria, such as transparency, financial health, and overall impact. The system orders charities by impact, provides recommendations, and offers a donation platform.

## Repositories

This project is split into several microservices and components, each hosted in separate repositories:

- Give Engine Front-End
- [Give Engine Charities API](https://github.com/alamerton/give-engine-charities-api)
- [Give Engine Users API](https://github.com/alamerton/give-engine-users-api)
- [Give Engine Likes API](https://github.com/alamerton/give-engine-likes-api)
- [Give Engine Recommender](https://github.com/alamerton/give-engine-recommender)
- [Give Engine Data Schemas](https://github.com/alamerton/give-engine-data-schemas)

## Installation and Setup

To run the system, follow these steps:

1. **Clone the repositories**:
   ```bash
   git clone https://github.com/alamerton/give-engine-.git
   ```

2. **Import Database Schemas**:
   - Open MySQL Workbench and import the schemas provided in the `give-engine-data-schemas` repository.

3. **Start the services**:
   - Navigate to each repository and run the following command:
     ```bash
     npm install
     npm run start
     ```
   - Ensure to start the `give-engine-front-end` last, after all the backend services are running.

## Usage

After setting up the system, you can access the front-end through your browser to start exploring charity recommendations. The system uses data from various APIs to present a list of charities rated based on impact, financial transparency, and other criteria. Users can filter and choose charities to donate to directly through the platform.

## Features

- **Charity Recommendation**: Provides personalized charity recommendations based on user preferences.
- **Impact Rating**: Orders charities by their impact and other important metrics.
- **User Interaction**: Allows users to like and interact with charity profiles.
- **Data-Driven Decisions**: Uses data schemas and APIs to handle charity information, user data, and preferences.

## Acknowledgements

I would like to extend my deepest thanks to:

- **David Wyatt**: For his invaluable guidance and encouragement throughout this project.
- **Steve Westwood**: For mentoring me and introducing me to essential software engineering concepts during my time at TotallyMoney.
- **Mentors and Friends**: Charles Ede, Thomas Banham, Theo Dean, Grant Wilkinson, Louie Colgan, Siranush Madoyan, and Goncalo Castro for their support.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
