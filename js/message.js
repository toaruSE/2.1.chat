window.onload = function() {
    const formElement = document.querySelector(".form");
    

    const date = new Date();
    formElement.addEventListener("submit",(e)=>{
        e.preventDefault();
        let msg = document.myForm.message.value;

        //クロスサイトスクリプト対策関数
        const escapeHTML = (string) => {
        string = string.replace(/\&/g, '&amp;');
        string = string.replace(/\</g, '&lt;');
        string = string.replace(/\>/g, '&gt;');
        string = string.replace(/\"/g, '&quot;');
        string = string.replace(/\'/g, '&#x27');
        return string;
        }
        msg = escapeHTML(msg);

        //空文字バリデーション
        if(msg === ""){
            alert("入力してください。");
            return;
        }


        const newMsgsElement = `
        <div class=my_info">
            <div class="my_chat_wrap">
                <div class="my_message">
                    ${msg}
                </div>
                <div class="transmission_time">
                    ${date.getHours() + ':' + date.getMinutes()}
                </div>
            </div>
        </div>
        `;

        const newPersonMsgsElement = `
        <div class="person_info">
            <div class="person_image">
                <img src="img/personIcon.jpeg">
            </div>
            <div class="person_chat_wrap">
                <div class="person_name">
                    総務経理FAQ Cogmo Attend
                </div>
                <div class="person_message">
                    ${msg}
                </div>
                <div class="transmission_time">
                    ${date.getHours() + ':' + date.getMinutes()}
                </div>
            </div>
        </div>
        `;

        const msgsBoxElement = document.getElementById("msgs_box");
        const boxElement = newMsgsElement + newPersonMsgsElement;
        msgsBoxElement.innerHTML += boxElement
    })
    
}