import './quickGameView.css';

function QuickGameView(props) {
    return  <div className={"quickGame appear "+(props.exiting&&"implode")}>
                <h1>Quick game mode!</h1>
                <div className="column left">
                    <div className="title">Play random game or...</div>
                    <button onClick={props.randomGame} className="gelatine">Random game</button>
                </div>
                <div className="verticalSeperator"></div>
                <div className="column right">
                    <div class="title">Choose difficult and category</div>
                    <label>Select Category: </label><br/>
                    <select name="trivia_category" className="form-control" onChange={(event)=>props.categoryChange(event.target.value)}>
                        <option value="any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                    <label>Select Difficulty: </label><br/>
                    <select name="trivia_difficulty" onChange={(event)=>props.difficultyChange(event.target.value)} className="form-control">
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button onClick={props.startGame} className="gelatine">Start quick game</button>
                </div><br/>
                <button onClick={props.backClick}>Go back</button>
            </div>;
}

export default QuickGameView;