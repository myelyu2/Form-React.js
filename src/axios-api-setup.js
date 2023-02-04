import axios from 'axios';

export async function getData() {
    // Send request to the API and get data
    const response = await axios.get("https://frontend-take-home.fetchrewards.com/form")
    return response.data;       
}

export async function getCachedData() {
    let data = getData()
    const ttl = 3000
    // TODO ADD TTL
    
    return data.then(res => {
        // Save request data in object and modify the states using map function
        res = {
            ...res.data,
            occupations: res.occupations,
            states: res.states.map(state => (state.abbreviation).concat(" - ", (state.name)) ),
        };

        // Store the data in localStorage
        localStorage.setItem("formData", JSON.stringify(res));
        return res;
    });
}

export async function postData(data) {
    try {
        const response = await axios.post("https://frontend-take-home.fetchrewards.com/form", data);
        console.log(response.status)
        return response.status;
    } catch (error) {
        console.error(error);
        return error;
    }
}

