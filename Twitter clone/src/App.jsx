

import TrendsPanel from './components/TrendsPanel';

function App() {
  // For demo, tweets are static in TweetFeed. To make TweetComposer work, you can lift state up here.
  return (
    <div className="twitter-app">
      <Sidebar />
      <main className="main-content">
        <TweetComposer onTweet={() => {}} />
        <TweetFeed />
      </main>
      <TrendsPanel />
    </div>
  );
}

export default App;
