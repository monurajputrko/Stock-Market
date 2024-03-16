import React from 'react'
import Header from './Header';

export default function Errors() {
    return (
        <>
            <Header />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginTop: "20%",
              margin: "10%",
            }}
          >
            <h1>Some Error is Encounterd</h1>
            <p>
              It's possible that the API limit has been exceeded if you're
              receiving an error message indicating so. API providers often
              impose limits on the number of requests you can make within a Day. To resolve this,
            </p>
            <h3>Please Use VPN of Your Choice to Overcome This Error</h3>
            <a href="https://1.1.1.1/" target="blank">
              Recomended Free Cloudflare VPN
            </a>
          </div>
        </div>
      </>
    );
}
