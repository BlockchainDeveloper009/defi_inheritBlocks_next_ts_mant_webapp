import { Notification, Button } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import axios from "axios";
import { CheckIcon } from "@modulz/radix-icons";
import {useEffect, useState} from "react";



function ShowNotificationExample() {
  //const notifications = Notifications();
  const [randomPlayer, setRandomPlayer ] = useState({first_name: ""});

  const getPlayerName = () => {
    axios.get("https://www.ballontlie.io/api/v1/players/237")
    .then((res) => {
      
    })
  }
  return (
    <div className="App">
       <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

        <Notification icon={<IconCheck size={18} />} color="teal" title="Teal notification">
          This is teal notification with icon
        </Notification>

        <Notification icon={<IconX size={18} />} color="red">
          Bummer! Notification without title
        </Notification>

        <Notification
          loading
          title="Uploading data to the server"
          disallowClose
        >
          Please wait until data is uploaded, you cannot close this notification yet
        </Notification>
    </div>
  );
}

export default ShowNotificationExample;
