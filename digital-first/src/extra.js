<div>
<div>
  <div>
    <span className="headline1">Headline 1</span>
  </div>
  <div>
    <span className="headline2">Headline 2</span>
    <div>
      <span className="heading">Heading</span>
    </div>
    <div>
      <span className="title1">Title 1</span>
    </div>
    <div>
      <span className="title2">Titel 2</span>
    </div>
    <div>
      <span className="subheading1">Sub Heading 1</span>
    </div>
    <div>
      <span className="subheading2">Sub Heading 2</span>
    </div>
    <div>
      <span className="body1">Body 1</span>
    </div>
    <div>
      <span className="body2">Body 2</span>
    </div>
    <div>
      <span className="caption">Caption</span>
    </div>
    <div>
      <span className="regular-narrow">Regular Narrow</span>
    </div>
    <div>
      <span className="medium-narrow">Medium Narrow</span>
    </div>
    {
    contacts[lang].map(contact => {
    return (
        <div>{contact.image}</div>
        <div>{contact.name}</div>
    )
})}
  </div>
</div>




import contacts from '../../assets/data/contact.js';
const GettingStarted = ({ brand, theme, lang = "en" }) => {

return (

  <div>
 {
    contacts[lang].map(contact => {
    return (
      <div>

        <div>{contact.image}</div>
        <div>{contact.name}</div>
        </div>
    )
})}
  </div>

