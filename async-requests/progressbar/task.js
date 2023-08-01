                const progress = document.getElementById('progress');
                const form = document.getElementById('form');

                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    uploadFile();
                });

                function uploadFile() {
                    const xhr = new XMLHttpRequest();
                    const url = 'https://students.netoservices.ru/nestjs-backend/upload';
                    const formData = new FormData();
                    const fileInput = document.getElementById('file');

                    formData.append('file', fileInput.files[0]);

                    xhr.open('POST', url, true);

                    xhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            const progressValue = (e.loaded / e.total);
                            progress.value = progressValue;
                        }
                    });

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                // Загрузка успешно завершена
                            } else {
                                // Возникла ошибка при загрузке файла
                            }
                        }
                    };

                    xhr.send(formData);
                }

                document.getElementById("file").onchange = function() {
                    const fileDesc = document.querySelector(".input__wrapper-desc");
                    let fileName = this.value.split("\\");
                    fileName = fileName[fileName.length - 1];
                    fileDesc.textContent = fileName;
                };