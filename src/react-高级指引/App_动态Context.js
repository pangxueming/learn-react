import React from 'react';
import { ThemeContext, themes } from "./react-高级指引/动态Context/theme-context";
import ThemedButton from "./react-高级指引/动态Context/themed-button";

function Toolbar(props) {
  return (
    <ThemedButton onClick={() => props.changeTheme()}>
      Change Theme
    </ThemedButton>
  )
}

function Page() {

  return (
    <div></div>
  );
}

function Section() {
  return (
    <div></div>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: themes.light
    }

    this.toggleChange = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.dark : themes.light
      }))
    }
  }

  render() {

    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleChange}></Toolbar>
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    )
  }
}

export default App;
