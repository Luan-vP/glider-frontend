import "./App.css";
import GliderCard from "./components/GliderCard";
import { Container, Grid } from "@mui/material";

function App() {
  let blocks = [];
  for (let i = 0; i < 6; i++) {
    blocks.push(
      <Grid item xs={4} key={i}>
        <GliderCard />
      </Grid>
    );
  }
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {blocks}
        </Grid>
      </Container>
    </>
  );
}

export default App;
