import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React Router
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Themes
import * as themes from './themes';
import ThemeContext from './themes/context';
import { ThemeProvider } from 'styled-components';

// Pages
import Projects from './pages/Projects';
import Project from './pages/Project';
import NewProject from './pages/NewProject';
import General from './pages/General';
import Settings from './pages/Settings';

function App() {
  // Theme setup
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [themeConfig, setThemeConfig] = React.useState({
    theme: themes[savedTheme],
    themeName: savedTheme,
    setTheme: themeName => {
      setThemeConfig({ ...themeConfig, theme: themes[themeName], themeName: themeName });
      localStorage.setItem('theme', themeName);
    }
  });

  return (
    <ThemeContext.Provider value={themeConfig}>
      <ThemeContext.Consumer>
        {themeConfig => (
          <ThemeProvider theme={themeConfig.theme}>
            <Router>
              <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/new" component={NewProject} />
                <Route exact path="/projects/info/:id" component={Project} />
                <Route exact path="/general" component={General} />
                <Route exact path="/settings" component={Settings} />
                <Route
                  path="/"
                  component={() => {
                    return <Redirect to="/projects" />;
                  }}
                />
              </Switch>
            </Router>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
