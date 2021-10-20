import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
// import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import { authSelectors } from './redux/Login/auth-selectors';
import operations from './redux/login/auth-operations';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/Register'));
const LoginView = lazy(() => import('./views/Login'));
const Conacts = lazy(() => import('./views/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <Conacts />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}

// export default function App() {
//   const dispatch = useDispatch();
//   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <Container>
//       {isFetchingCurrentUser ? (
//         <h1>Показываем React Skeleton</h1>
//       ) : (
//         <>

//         </>
//       )}
//     </Container>
//   );
// }
