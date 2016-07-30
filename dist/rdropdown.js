var RDropdown =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RDropdown = function (_Component) {
	    _inherits(RDropdown, _Component);

	    function RDropdown(props) {
	        _classCallCheck(this, RDropdown);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RDropdown).call(this, props));

	        _this.displayName = 'RDropdown';

	        _this.state = {
	            searchValue: null,
	            filteredOptions: null,
	            options: props.options,
	            isLoading: true,
	            focusedOption: null,
	            focusedIndex: 0,
	            preselectedOptions: []
	        };

	        _this.handleSearch = _this.handleSearch.bind(_this);
	        _this.handleOptionSelected = _this.handleOptionSelected.bind(_this);
	        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	        _this.handleApply = _this.handleApply.bind(_this);
	        _this.handleError = _this.handleError.bind(_this);
	        _this.handleError = _this.handleError.bind(_this);

	        _this.setSearchValue = _this.setSearchValue.bind(_this);
	        _this.setOptions = _this.setOptions.bind(_this);
	        return _this;
	    }

	    _createClass(RDropdown, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var options = this.props.options;
	            if ('function' === typeof options.then) {
	                options.then(this.setOptions).catch(this.handleError);
	            } else {
	                this.setOptions(options);
	            }
	        }

	        /**
	         * When the parent container has a tabIndex of 0, autofocusing an input element
	         * does not work. We need to manually check if it has been rendered and then invoke the focus method
	         */

	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var searchInput = this.refs.searchInput;
	            if (searchInput) {
	                searchInput.focus();
	            }
	        }
	    }, {
	        key: 'setFilteredOptions',
	        value: function setFilteredOptions(options) {
	            this.setState({ filteredOptions: options });
	        }
	    }, {
	        key: 'getOptions',
	        value: function getOptions() {
	            var _state = this.state;
	            var filteredOptions = _state.filteredOptions;
	            var options = _state.options;

	            return filteredOptions || options;
	        }
	    }, {
	        key: 'setOptions',
	        value: function setOptions(options) {
	            var _this2 = this;

	            this.setState({ options: options, isLoading: false }, function () {
	                var selectedOption = _this2.props.selectedOption;

	                if (selectedOption) {
	                    _this2.setFocusedOption(_this2.getIndexForOption(selectedOption), options);
	                } else {
	                    _this2.setFocusedOption(0, options);
	                }
	            });
	        }
	    }, {
	        key: 'getIndexForOption',
	        value: function getIndexForOption(option) {
	            var options = this.getOptions();
	            if (options) {
	                var index = options.findIndex(function (x) {
	                    return x === option;
	                });
	                return index;
	            }
	            return 0;
	        }
	    }, {
	        key: 'setSearchValue',
	        value: function setSearchValue(value) {
	            this.setState({ searchValue: value });
	        }
	    }, {
	        key: 'setFocusedOption',
	        value: function setFocusedOption(index, options) {
	            if (options.length > 0) {
	                this.setState({ focusedOption: options[index], focusedIndex: index });
	                this.scrollToFocusedOption(index);
	            }
	        }
	    }, {
	        key: 'scrollToFocusedOption',
	        value: function scrollToFocusedOption(index) {
	            var focusedOptionDom = this.refs['option_' + index];
	            var listDom = this.refs.list;
	            var focusedOptionDomRectangle = focusedOptionDom.getBoundingClientRect();
	            var listDomRectangle = listDom.getBoundingClientRect();
	            if (focusedOptionDomRectangle.bottom > listDomRectangle.bottom || focusedOptionDomRectangle.top < listDomRectangle.top) {
	                listDom.scrollTop = focusedOptionDom.offsetTop + focusedOptionDom.clientHeight - listDom.offsetHeight;
	            }
	        }
	    }, {
	        key: 'focusOption',
	        value: function focusOption(direction, options) {
	            var focusedIndex = this.state.focusedIndex;
	            if (direction > 0) {
	                // Next option...
	                this.setFocusedOption(Math.min(options.length - 1, focusedIndex + 1), options);
	            } else {
	                // Previous option...
	                this.setFocusedOption(Math.max(0, focusedIndex - 1), options);
	            }
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(err) {
	            console.error('An error occurred', err);
	            this.setState({
	                errorOccurred: true
	            });
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose() {
	            this.props.onClose();
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(err) {
	            this.setState({
	                errorOccurred: true
	            });
	        }
	    }, {
	        key: 'handleSearch',
	        value: function handleSearch(event) {
	            var value = event.target.value;
	            this.setSearchValue(value);
	            if (value) {
	                var options = this.state.options;
	                var filteredOptions = this.props.onSearch(value, options);
	                this.setFilteredOptions(filteredOptions);
	                this.setFocusedOption(0, filteredOptions);
	                return;
	            }
	            this.setFilteredOptions(null);
	            this.setFocusedOption(0, this.state.options);
	        }
	    }, {
	        key: 'handleApply',
	        value: function handleApply() {
	            if (this.props.onApply) {
	                this.close();
	            }
	        }
	    }, {
	        key: 'handleOptionSelected',
	        value: function handleOptionSelected(option) {
	            var applyOptions = this.props.applyOptions;

	            if (!applyOptions) {
	                this.props.onSelectedOptions(option);
	            }
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            var options = this.getOptions();
	            var isLoading = this.state.isLoading;

	            if (options.length > 0 && !isLoading) {
	                var keys = {
	                    DOWN: 40,
	                    UP: 38,
	                    ESCAPE: 27,
	                    ENTER: 13
	                };
	                switch (e.keyCode) {
	                    case keys.ENTER:
	                        this.handleOptionSelected(this.state.focusedOption);
	                        return;
	                    case keys.ESCAPE:
	                        if (this.props.enableEsc) {
	                            this.handleClose();
	                        }
	                        return;
	                    case keys.DOWN:
	                        this.focusOption(1, options);
	                        e.preventDefault();
	                        return;
	                    case keys.UP:
	                        this.focusOption(-1, options);
	                        e.preventDefault();
	                        return;
	                }
	            }
	        }
	    }, {
	        key: 'renderSearch',
	        value: function renderSearch() {
	            var searchable = this.props.searchable;

	            if (searchable) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-filter' },
	                    _react2.default.createElement('input', { autoFocus: true, tabIndex: 0, ref: 'searchInput', type: 'text', onChange: this.handleSearch, value: this.state.searchValue || '', placeholder: this.props.searchPlaceholder })
	                );
	            }
	        }
	    }, {
	        key: 'renderApply',
	        value: function renderApply() {
	            var _props = this.props;
	            var onApply = _props.onApply;
	            var applyText = _props.applyText;
	            var isLoading = this.state.isLoading;

	            if (!isLoading && onApply) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-apply' },
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: this.handleApply, className: 'dropdown-menu-apply-btn' },
	                        applyText
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'isSelectedOption',
	        value: function isSelectedOption(option) {
	            var selectedOption = this.props.selectedOption;

	            if (selectedOption) {
	                return selectedOption === option;
	            }
	            return false;
	        }
	    }, {
	        key: 'isFocusedOption',
	        value: function isFocusedOption(option) {
	            var focusedOption = this.state.focusedOption;

	            if (focusedOption) {
	                return focusedOption === option;
	            }
	            return false;
	        }
	    }, {
	        key: 'buildClassNamesForOption',
	        value: function buildClassNamesForOption(option) {
	            var selectedClasses = "dropdown-menu-list-item dropdown-menu-list-option-selected";
	            var normalClass = "dropdown-menu-list-item";
	            var focusedClasses = "dropdown-menu-list-item dropdown-menu-list-option-focused";
	            var classNames = normalClass;
	            if (this.isSelectedOption(option)) {
	                classNames = selectedClasses;
	            } else if (this.isFocusedOption(option) && !this.isSelectedOption(option)) {
	                classNames = focusedClasses;
	            }
	            return classNames;
	        }
	    }, {
	        key: 'renderOptions',
	        value: function renderOptions() {
	            var _this3 = this;

	            var options = this.getOptions();
	            if (options.length === 0) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-no-results' },
	                    this.props.noResultsText
	                );
	            }
	            var renderedOptions = options.map(function (option, index) {
	                return _react2.default.createElement(
	                    'a',
	                    { key: index,
	                        className: _this3.buildClassNamesForOption(option),
	                        ref: 'option_' + index,
	                        onClick: _this3.handleOptionSelected.bind(_this3, option) },
	                    _this3.props.renderOption(option)
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'dropdown-menu-list', ref: 'list' },
	                renderedOptions
	            );
	        }
	    }, {
	        key: 'renderList',
	        value: function renderList() {
	            var _state2 = this.state;
	            var errorOccurred = _state2.errorOccurred;
	            var isLoading = _state2.isLoading;
	            var errorText = this.props.errorText;

	            if (errorOccurred) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-no-results' },
	                    errorText
	                );
	            }
	            if (isLoading) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-loading' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'loading-spinner-grid' },
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner1' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner2' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner3' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner4' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner5' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner6' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner7' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner8' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner9' })
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'dropdown-menu-filters' },
	                this.renderSearch(),
	                this.renderOptions()
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var title = _props2.title;
	            var onClose = _props2.onClose;

	            return _react2.default.createElement(
	                'div',
	                { tabIndex: '0', className: 'dropdown-menu', ref: 'dropdownMenu', onKeyDown: this.handleKeyDown },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-header' },
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'dropdown-menu-close', onClick: onClose },
	                        '×'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'dropdown-menu-title' },
	                        title
	                    )
	                ),
	                this.renderList(),
	                this.renderApply()
	            );
	        }
	    }]);

	    return RDropdown;
	}(_react.Component);

	RDropdown.propTypes = {
	    renderOption: _react.PropTypes.func.isRequired,
	    onSelectedOptions: _react.PropTypes.func.isRequired,
	    selectedOption: _react.PropTypes.any,
	    onClose: _react.PropTypes.func.isRequired,
	    onSearch: _react.PropTypes.func,
	    multiple: _react.PropTypes.bool,
	    title: _react.PropTypes.string,
	    searchable: _react.PropTypes.bool,
	    searchPlaceholder: _react.PropTypes.string,
	    noResultsText: _react.PropTypes.string,
	    enableEsc: _react.PropTypes.bool,
	    errorText: _react.PropTypes.string,
	    applyOptions: _react.PropTypes.bool,
	    applyText: _react.PropTypes.string
	};
	RDropdown.defaultProps = {
	    searchable: false,
	    searchPlaceholder: 'Search...',
	    noResultsText: 'No results',
	    enableEsc: true,
	    errorText: 'An error occurred.',
	    applyText: 'Apply',
	    applyOptions: false,
	    selectedOption: null,
	    multiple: false,
	    title: 'Filter'
	};
	exports.default = RDropdown;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ }
/******/ ]);