import './promiseNoData.css';

function promiseNoData(promise) {
  if (!promise.promise) {
    return <div>No data</div>;
  }
  if (!promise.data && !promise.error) {
    return  <div className="promiseNoData">
              <img src="Quizalicious logo.svg" className="logo" alt="" />
              <h1 className="laden">Loading....</h1>
              <div className="loading_bar"></div>
            </div>;
  }
  if (!promise.data && promise.error) {
    return <div>{promise.error.toString()}</div>;
  }
  if (!promise.error) {
    return false;
  }
}
export default promiseNoData;
