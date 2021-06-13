import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MyContainer, TitleBlock, CardAction, CardMediaPlace, GridContainer } from './styled';

const Home = () => {
  return (
    <MyContainer fixed>
      <TitleBlock>
        <Typography variant="h3" component="div">
          Welcome to the home page
          <Typography variant="subtitle1" component="p">
            on this page you can see the advantages and capabilities of this application
          </Typography>
        </Typography>
      </TitleBlock>
      <GridContainer container spacing={5}>
        <Grid item xs={4}>
          <Link to="/teams" style={{ textDecoration: 'none' }}>
            <Card>
              <CardAction>
                <CardMediaPlace image="https://illustrators.ru/uploads/illustration/image/1196073/main_Programmers_alt_col_copy.png" />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2" align="center">
                    Teams
                  </Typography>
                </CardContent>
              </CardAction>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Card>
              <CardAction>
                <CardMediaPlace image="https://image.freepik.com/free-vector/online-training_41910-184.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2" align="center">
                    Projects
                  </Typography>
                </CardContent>
              </CardAction>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/boards" style={{ textDecoration: 'none' }}>
            <Card>
              <CardAction>
                <CardMediaPlace image="https://courses.yaware.ru/wp-content/uploads/2018/07/Rol-rukovodytelya-v-obuchenyy-personala-750x561.png" />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2" align="center">
                    Boards
                  </Typography>
                </CardContent>
              </CardAction>
            </Card>
          </Link>
        </Grid>
      </GridContainer>
    </MyContainer>
  );
};

export default Home;
