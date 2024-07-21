document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const image = document.getElementById('image').value || 'https://via.placeholder.com/100';
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(el => el.value).join(', ');

    const studentData = `
        <div class="student">
            <div>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</trong> ${email}</p>
                <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            </div>
            <img src="${image}" alt="Student Image">
        </div>
    `;

    document.getElementById('studentsList').innerHTML += studentData;

    document.getElementById('enrollmentForm').reset();
});

document.getElementById('clearForm').addEventListener('click', function() {
    document.getElementById('enrollmentForm').reset();
});
