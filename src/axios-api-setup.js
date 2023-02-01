import axios from 'axios';

// encode => {}
// server side encoding ??

export async function getData() {
    const response = await axios.get("https://frontend-take-home.fetchrewards.com/form")
    return response.data;       
}

export async function getCachedData() {
    let data = getData()
    return data.then(res => {
        res = {
            ...res.data,
            occupations: res.occupations,
            states: res.states.map(state => (state.abbreviation).concat(" - ", (state.name)) ),
        };

        // Store the data in localStorage
        localStorage.setItem("formData", JSON.stringify(res));

        // encode -> save (formDataHash)
        return res;
    });
}

