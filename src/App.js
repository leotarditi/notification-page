import { useState } from 'react';
import './App.css';

function App() {
  const [notis, setNotis] = useState(
    [
      {
        "id": "1",
        "author": {
          "name": "Mark Webber",
          "img":"/images/avatar-mark-webber.webp",
          "href": "#"
        },
        "text": "reacted to your recent post",
        "link": {
          "text": "My first tournament today!",
          "href": "#"
        },
        "time": "1m ago",
        "isUnread": true,
      },
      {
        "id": "2",
        "author": {
          "name": "Angela Gray",
          "img":"/images/avatar-angela-gray.webp",
          "href": "#"
        },
        "text": "followed you",
        "time": "5m ago",
        "isUnread": true,
      },
      {
        "id": "3",
        "author": {
          "name": "Jacob Thompson",
          "img":"/images/avatar-jacob-thompson.webp",
          "href": "#"
        },
        "text": "has joined your group",
        "link": {
          "text": "Chess Club",
          "href": "#"
        },
        "time": "1 day ago",
        "isUnread": true,
      },
      {
        "id": "4",
        "author": {
          "name": "Rizky Hasanuddin",
          "img":"/images/avatar-rizky-hasanuddin.webp",
          "href": "#"
        },
        "text": "sent you a private message",
        "time": "5 day ago",
        "privateMessage": "Hello, thanks for setting Chess Club. I've been a member for a few week now and I'm already havving lots of fun and improving my game",
        "isUnread": false,
      },
      {
        "id": "5",
        "author": {
          "name": "Kimberly Smith",
          "img":"/images/avatar-kimberly-smith.webp",
          "href": "#"
        },
        "text": "commented on your picture",
        "image": {
          "src": "/images/image-chess.webp",
          "alt": "Chess game",
          "href": "#"
        },
        "time": "1 week ago",
        "isUnread": false,
      },
      {
        "id": "6",
        "author": {
          "name": "Nathan Peterson",
          "img":"/images/avatar-nathan-peterson.webp",
          "href": "#"
        },
        "text": "reacted to your recent post",
        "link": {
          "text": "5 end-game strategies to increase your win",
          "href": "#"
        },
        "time": "2 week ago",
        "isUnread": false,
      },
      {
        "id": "7",
        "author": {
          "name": "Anna Kim",
          "img":"/images/avatar-anna-kim.webp",
          "href": "#"
        },
        "text": "left the group",
        "link": {
          "text": "Chess Club",
          "href": "#"
        },
        "time": "2 week ago",
        "isUnread": false,
      },
    ]
  )

  function markAllUnread(){
    setNotis((prev) => prev.map(n => ({...n, isUnread: false})))
  }

  function handleNotificationClick(id){
    setNotis((prev) => prev.map(n => (
      n.id === id
        ? {...n, isUnread: false}
        : n
    )))
  }

  return (
    <div className="App">
      <div className='container'>
        <header>
          <div className='title'>
            <h1>Notifications</h1>
            <span className='badge'> {notis.filter(n => n.isUnread).length}</span>
            <button id='mark' onClick={markAllUnread}>Mark all as read</button>
          </div>
        </header>
        {notis && notis.map((n) => (
          <div key={n.id} onClick={() => handleNotificationClick(n.id)}>
            <img src={n.author.img} alt={n.author.name} />

            <div className='post-text'>
              <a href={n.author.href}>
                {n.author.name}
              </a>
              <p>{n.text}</p>
              {n.link && (<a href={n.link.href}>
                {n.link.text}
              </a>)}
              {n.isUnread && (
                <span className='isUnread'></span>
              )}
            </div>

            <p className='time'>{n.time}</p>

            {n.privateMessage && (
              <p className='privateMessage'>
                {n.privateMessage}
              </p>
            )}

            {n.image && (<a href={n.image.href}> 
              <img src={n.image.src} alt={n.image.alt} /> 
            </a>)}

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
