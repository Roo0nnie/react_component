import React from 'react';
import { Grid } from "@mui/material";

function OptionalStrucTitle() {
    return (
        <Grid>
            <h2>Autocomplete</h2>
            <p>The autocomplete is a normal text input enhanced by a panel of suggested options.</p>
            <p>The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:</p>
            <ol>
                <li>The value for the textbox must be chosen from a predefined set of allowed values, for example a location field must contain a valid location name: combo box.</li>
                <li>The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, for example a search field may suggest similar or previous searches to save the user time: free solo.</li>
            </ol>
        </Grid>
    );
}

export default OptionalStrucTitle;
