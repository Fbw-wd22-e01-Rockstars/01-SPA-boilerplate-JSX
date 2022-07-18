# `01` Hello JSX
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)


JSX also allows you to easily include variables into your HTML.

-   Create `name`, `age` variables inside `src/index.js`.
-   Define the variables value as you want, for example:
    ```js
    let age = YOUR AGE, let name = YOUR NAME 
    ```
-   Create another variable `output` to include the values of `age` and `name` into your *HTML* code dynamically, for example:
    ```jsx
    let output = <span> My name is {name} and i am {age} years old. </span>
    ```
    __Note the position of the curly brackets `{` and `}` wrapping the variable.__
-   Render your script code result using `ReactDOM.render`, for example:
    ```jsx
    // use react-dom to render it into the DOM
    import ReactDOM from 'react-dom';
                //render output      //inside the innerHTML of #myDiv
    ReactDOM.render(output,             document.querySelector('#myDiv'));
    ```

The resulting website HTML document will look like this:
```html
<div id="myDiv">
    <span>James is 12 years old</span>
</div>
```

Basically, we are now able to mix HTML and JS in the same file without having to concatenate and use strings. :smiley: Amazing! :angry: right?

[//]: # (autograding info start)
## Results


### Check `age` and `name` variables.

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | `age` variable exists   |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | `name` variable exists |



[🔬 Results Details](https://github.com/DigitalCareerInstitute/SPA-boilerplate-JSX/actions)

[📢 Give Feedback or Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-boilerplate-JSX&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FSPA-boilerplate-JSX)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/SPA-boilerplate-JSX/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)