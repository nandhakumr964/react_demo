import React, { Component } from 'react';

class ThemeSwitcher extends Component {
	state = { theme: null }

	resetTheme = evt => {
		evt.preventDefault();
		this.setState({ theme: null });
	}

	chooseTheme = (theme, evt) => {
		evt.preventDefault();
		this.setState({ theme });
	}

  render() {
		const { theme } = this.state;
		const themeClass = theme ? theme.toLowerCase() : 'secondary';

    return (
			<div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
				<span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>
				<div class="btn-group">
					<button type="button" class={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>
					<button type="button" class={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span class="sr-only">Toggle Theme Dropdown</span>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary color', e)}>Primary Theme</a>
						<a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger color', e)}>Danger Theme</a>
						<a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Success color', e)}>Success Theme</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
					</div>
				</div>
			</div>
    );
  }
}

export default ThemeSwitcher;
