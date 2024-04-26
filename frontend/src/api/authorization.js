async function authorize(username, password) {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: username,
        password: password
      })
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}


// Пример использования функции:
// login('developer', 'skillbox')
//   .then(token => {
//     if (token) {
//       console.log('Login successful. Token:', token);
//       // Дальнейшие действия после успешной авторизации
//     } else {
//       console.log('Login failed.');
//       // Обработка ошибки при авторизации
//     }
//   });
// }
export default authorize
