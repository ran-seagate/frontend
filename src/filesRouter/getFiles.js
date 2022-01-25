import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteActivated from '../buttons/Delete';
import DownloadActivated from '../buttons/Download';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));



export default function GetFiles(){
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
      axios.get("http://backend/files/").then((response) => {
        setData(response.data);
      });
    }, []);
  
    if (!data) return null;

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={20} md={20}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <h1>Files</h1>
          </Typography>
          <Demo>
            <List>
            <ListItem key="9876">
                  <ListItemText
                    primary="File Name"
                  />
                  <ListItemText
                    primary="File Size"
                  />
                  <ListItemText
                    primary="File Creation date"
                  />
                  <ListItemText
                    primary="File extension"
                  />
                </ListItem>
            {data.map(d => <ListItem key={d.name}>
                  <ListItemIcon>
                    <FolderIcon color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={d.name}
                  />
                  <ListItemText
                    primary={d.size}
                  />
                  <ListItemText
                    primary={d.creation_date}
                  />
                  <ListItemText
                    primary={d.ext}
                  />
                  <FileDownloadIcon color="primary" aria-label="download" onClick={() => {
                        DownloadActivated(d.name)
                    }}>
                </FileDownloadIcon>
                <DeleteIcon color="error" aria-label="delete" onClick={() => {
                        DeleteActivated(d.name)
                    }}>
                </DeleteIcon>
                </ListItem>
                )}
            </List>
          </Demo>
      </Grid>
    </Box>
  );
} 