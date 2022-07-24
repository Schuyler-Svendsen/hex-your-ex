const quotes = [
{ content: "May the Duolingo Owl shame him" },
{ content: "May his milk sour before the printed date" },
{ content: "May his Uber fares always be surge pricing" },
{ content: "May his shoes always be one size too small" },
{ content: "May his sheets always be too short" },
{ content: "May he step in water while wearing socks" },
{ content: "May Netflix always buffer" },
{ content: "May he never remember his passwords" },
{ content: "May he never find the cold side of his pillow" },
{ content: "May he marry in haste and repent at leisure" },
{ content: "May his employer have a mandatory mask policy" },
{ content: "May all his Facebook notifications be game invites" },
{ content: "May he feel his cell phone vibrating in the pocket it's not even in" },
{ content: "May every 'empty' parking spot he sees contain a motorcycle" },
{ content: "May he standup from his computer with his headphones still attached" },
{ content: "May his socks slightly rotate, just enough to be uncomfortable" },
{ content: "May his neighbor enjoy drum circles" },
{ content: "May his tea be too hot when he receives it and too cold by the time he remembers it's there" },
{ content: "May his chair produce a sound similar to a fart, but only once, such that he cannot reproduce it to prove it was the chair" },
{ content: "May both sides of his pillow be warm" }];



class Quoter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '' };


    this.newQuote = this.newQuote.bind(this);

  }

  newQuote() {
    let number = Math.floor(Math.random() * 22);

    let quote = quotes[number].content;

    this.setState({ content: quote });

    let author = quotes[number].author;
    this.setState({ author: author });


    $(".quote-text").addClass('button-anim');
    setTimeout(function () {
      $(".quote-text").removeClass('button-anim');
    }, 1500);

  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box", className: "center-div" }, /*#__PURE__*/
      React.createElement(Text, { quote: this.state.content, author: this.state.author }), /*#__PURE__*/
      React.createElement(Buttons, { handleNewQuote: this.newQuote, quote: this.state.content, author: this.state.author })));


  }}


class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "text", class: "quote-text button-anim" }, "\"", this.props.quote, "\""), /*#__PURE__*/
      React.createElement("h2", { id: "author", class: "author-text button-anim" }, "- ", this.props.author)));


  }}


class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("button", { type: "button", id: "new-quote", className: "btn btn-success", onClick: this.props.handleNewQuote }, "New Hex"), " ", /*#__PURE__*/React.createElement("a", { id: "tweet-quote", target: "_blank", href: `https://twitter.com/intent/tweet/?text=${this.props.quote} - ${this.props.author}` })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Quoter, null),
document.getElementById('content'));