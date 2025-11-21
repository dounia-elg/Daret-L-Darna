import axios from "axios";

const API = axios.create({
    basseURL: "http://localhost:3001/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;