import React from 'react';

require('../../../style/index.css');

const InstructionsView = () => (
  <div>
    <h1>GPS Track Processing Instructions</h1>

    <h2>Downloading from iPad</h2>

    <h3>On the iPad before connecting to computer:</h3>
    <ol>
      <li><b>Open</b> the <b>DJI GO</b> app [DJI GO (Inspire)
        or DJI GO 4 (P4)] and make sure you are logged in as
        the user with the flight logs you wish to access.
      </li>
      <li>On the main screen <b>select <i>“Me”</i></b> from the list of icons
        on the bottom.
      </li>
      <li><b>Select <i>“Flight Records”</i></b> then select the flight log you
        would like to download. The flight record will open.
      </li>
      <li><b>Select</b> the <b>Share button</b> on the bottom right, it looks
        like a small box with an arrow coming out.
      </li>
      <li><b>Select</b> the <b><i>“Export CSV”</i></b> text on the top right of the screen.
        An “Export Success” popup should appear briefly.
      </li>
      <li><b>Repeat</b> step 4,5 for as many individual flight logs as
        you need to download.
      </li>
    </ol>

    <h3>While logged into the iPad connect the iPad to the computer via USB:
    </h3>
    <ol>
      <li>If the iPad displays a <b><i>“trusted computer?”</i></b> popup, answer
        <b><i>Yes</i></b> that the computer is trusted. ITunes should open automatically.
      </li>
      <li>If Windows displays a <b><i>“trusted computer”</i></b> popup, answer <b><i>Yes</i></b>.
      </li>
      <li>In iTunes <b>select the iPad icon</b> to the right of the “Music, Movies,
        etc…” Selection bar on the top, the button has a picture of a small iPad on it.
      </li>
      <li><b>Select <i>“File Sharing”</i></b> from the menu on the left.
      </li>
      <li><b>Select DJI app</b>, either DJI GO or DJI GO 4 depending on which app
        was used to export the flight records.
      </li>
      <li><b>Highlight</b> the <b><i>“ExportFlightRecords”</i></b> folder by selecting
        it then select <b><i>“Save to…”</i></b> at the bottom of the file list. Choose
        a location to save the folder. Make sure not to overwrite a previously downloaded
        folder.
      </li>
    </ol>

    <p>
      <i>You may return the iPad to the user and close iTunes. The following steps do not
      require the iPad or iTunes.
      </i>
    </p>
  </div>
);

export default InstructionsView;
