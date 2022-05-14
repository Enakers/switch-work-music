import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container, Image, Spinner } from 'react-bootstrap';
import { useStore } from '../stores/ProvideStore';
import styles from './App.module.scss';

const App = () => {
  const store = useStore();

  useEffect(() => {
    store.initData();
  }, []);

  if (store.loading) {
    return (
      <div className="d-flex align-items-center min-vh-100 justify-content-center">
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Container fluid id={styles.gridContainer} className="text-center">
      <div id={styles.config}>
        <h3>Config</h3>
      </div>

      <div id={styles.main} className="text-center">
        <h3>Switch work Music</h3>
        <Image src="/logo.png" alt="Jellybean switch" width={64} height={64} />
      </div>

      <div id={styles.playlist} className="text-center">
        <h3>Playlist</h3>
      </div>
    </Container>
  );
};

export default observer(App);
