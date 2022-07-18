import React from "react"; //Main React.js library
const fs = require('fs');
const path = require('path');
import ReactDOM from "react-dom"
import { act } from "react-dom/test-utils";
// add rewire
const rewire = require('rewire');

afterAll(() => {
    // delete temp file 
    fs.unlinkSync(path.join(__dirname, '../index_temp.js'));
    fs.unlinkSync(path.join(__dirname, '../index_temp2.js'));
})


// define console.log
const consoleLog = jest.fn();
global.console.log = consoleLog;

describe("Check `age` and `name` variables.", () => {
    it("`age` variable exists  ", () => {
        document.body.innerHTML = '<div id="myDiv"></div>';
       const jsString = fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8');
       const text =  jsString + '\nif(age !== \'\' && name !== \'\' && output !== \'\'){console.log(age-age+1);}' ;
       fs.writeFileSync(path.join(__dirname, '../index_temp.js'), text);
         require(path.join(__dirname, '../index_temp.js'));
         // expect alert to be called
         const div = document.querySelector('#myDiv');
            //expect(div.innerHTML).toContain(consoleLog.mock.calls[0][0].toString());
            expect(consoleLog).toHaveBeenCalledWith(1);
    });
} );
describe("Check HTML output.", () => {
    it("HTML output contains `age` and 'name'", () => {
        document.body.innerHTML = '<div id="myDiv"></div>';
         const jsString = fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8');
            const text =  jsString + '\nconsole.log(output.props.children);' ;
            fs.writeFileSync(path.join(__dirname, '../index_temp2.js'), text);
            require(path.join(__dirname, '../index_temp2.js'));
            // expect alert to be called
            const div = document.querySelector('#myDiv');
            const contentText = consoleLog.mock.calls[0][0].toString().replace(/\s/g, '');
            
            expect(div.innerHTML).toContain(contentText);
    } );
} );

    