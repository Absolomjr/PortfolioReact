import React from 'react'
import { RESULTS } from '../util/ResultsData.js';
function ResultsComponent() {
    console.log("My Results", RESULTS);

    const myResults = RESULTS.map(result =>
        <tr>
            <th>{result.semester}</th>
            <th>{result.year}</th>
            <th>{result.course_code}</th>
            <th>{result.course_title}</th>
            <th>{result.Grade}</th>
            <th>{result.credit_unit}</th>
        </tr>


    );

    return (
        <>
                <table border="1">

                    <tr>
                        <th>semester</th>
                        <th>year</th>
                        <th>Course Code Test</th>
                        <th>Course Title</th>
                        <th>Grade</th>
                        <th>Credit Units</th>
                    </tr>
                    {myResults}


                </table>
            </>
            );
}

            export default ResultsComponent;