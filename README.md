# Tax Calculator

A web-based Tax Calculator application built with HTML, CSS, and JavaScript.

## Features
- Calculate federal income tax for single and married filers
- Shows effective tax rate and after-tax income
- Containerized with Docker (nginx)
- CI/CD pipeline with Tekton on IBM Cloud

## Project Structure
```
tax-calculator/
├── index.html          # Main HTML page
├── script.js           # UI interaction logic
├── style.css           # Styling
├── taxCalculator.js    # Core tax calculation logic
├── favicon.ico         # App icon
├── Dockerfile          # Docker build file
├── package.json        # Node.js dependencies
├── spec/
│   ├── support/
│   │   └── jasmine.json
│   └── taxCalculatorSpec.js   # Jasmine unit tests
├── tekton/
│   ├── tasks.yaml      # Tekton tasks (npm, jasmine)
│   ├── pipeline.yaml   # Tekton pipeline
│   └── run.yaml        # PipelineRun
└── submissions/        # Assignment submission files
```

## Running Tests
```bash
npm install
npx jasmine
```

## Docker
```bash
docker build -t tax-calculator .
docker run -d -p 8080:80 --name tax-calculator tax-calculator
```
Open http://localhost:8080 in your browser.
