# QA and SRE work sample
## Overview
This is a Ruby on Rails API service that handles payment method tokenization using Spreedly.

## Setup

### Prerequisites
- Ruby 3.2.2
- Rails 7.1.0
- Bundler

### Installation
1. Clone the repository
2. Install dependencies:
```bash
bundle install
```
3. Start the server with `bundle exec rails s -p 3000`

### Sample request body
```json
{
  "payment_method": {
    "card_number": "4111111111111111",
    "month": "12",
    "year": "2025",
    "first_name": "Test",
    "last_name": "User",
    "cvv": "123"
  }
}
```

## Automation Test Framework

This test framework is built using the open-source framework for cross-browser automation and end-to-end web application testing which is [Playwright](https://playwright.dev/docs/intro)

### install the packages

From the root folder, run the `npm` installation command below
```bash
npm install
```

### Running the tests

Before running, ensure that the Frontend and Backend is running.
```bash
npx playwright test
```

### Review the run report
```bash
npx playwright show-report
```

### Alternative Automation Framework Considered
When choosing an automated testing framework, alternatives like Pytest was also considered. Playwright was selected because of its flexibility to manage both frontend and backend automated tests.