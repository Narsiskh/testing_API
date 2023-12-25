import axios from 'axios';

interface User {
    id: number,
    name: string,
    email: string
}

axios.get<User[]>('https://httpbin.org/get' ,{
    params: {
        id: 123,
        name: 'Narcis',
        email: 'narsiskh.2013@gmail.com'
    },
})
    .then(response => {
        const users = response.data;
        console.log(users);
    })
    .catch(error => {
        console.log(error);
    });

axios.post<User[]>('https://httpbin.org/post' , {
    id: '124',
    name: 'Rahil',
    email: 'narsiskh.2013@gmail.com'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


const patchData: User = {
    id: 125,
    name: 'Narcis',
    email: 'narsiskh.2013@gmail.com'
};

axios.patch<User[]>('https://httpbin.org/patch', patchData)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    });

const deleteData: User = {
    id: 123,
    name: 'Narcis',
    email: 'narsiskh.2013@gmail.com'
};

axios.delete<User[]>('https://httpbin.org/delete', deleteData)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    });

const putData: User = {
    id: 126,
    name: 'Amy',
    email: 'Amy@gmail.com'
};

axios.put<User[]>('https://httpbin.org/put', putData)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    });