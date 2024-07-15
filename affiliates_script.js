document.getElementById('affiliateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const affiliateId = document.getElementById('affiliateId').value;
    const url = `https://raw.githubusercontent.com/external-naming-convention/validate/main/affiliates.json`;
    if (affiliateId != "none") {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const result = data[affiliateId];
                if (result) {
                    document.getElementById('result').innerHTML = `
                        <p>Discord Server: <a href="https://discord.${result.discord}">${result.discord}</a></p>
                        <p>Website: <a href="${result.website}">${result.website}</a></p>
                    `;
                } else {
                    document.getElementById('result').textContent = 'Affiliate ID not found.';
                }
            })
            .catch(error => {
                document.getElementById('result').textContent = 'Error fetching data.';
                console.error('Error:', error);
            });
    } else {
        document.getElementById('result').textContent = 'The executor that you are using is currently not affiliated with ENC, this does NOT mean it is unsafe.';
    }
});
