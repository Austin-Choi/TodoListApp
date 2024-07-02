
//textarea + button
function TodoInput(){
    return(
        <div>
            <form action=".">
            <label for="todoText">할일 작성</label>
            <textarea id="todoText" name="todoText">
                할일을 작성해 보세요!
            </textarea>
            <input type="submit" value="작성하기"/>
        </form>
        </div>
    );
}