/**
 * Returns the contextual add-on data that should be rendered for
 * the current e-mail thread. This function satisfies the requirements of
 * an 'onTriggerFunction' and is specified in the add-on's manifest.
 *
 * @param {Object} event Event containing the message ID and other context.
 * @returns {Card[]}
 */
function getContextualAddOn(event) {
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newCardHeader().setTitle("Log Your Expense"));

  var section = CardService.newCardSection();
  section.addWidget(
    CardService.newTextInput().setFieldName("Date").setTitle("Date")
  );
  section.addWidget(
    CardService.newTextInput().setFieldName("Amount").setTitle("Amount")
  );
  section.addWidget(
    CardService.newTextInput()
      .setFieldName("Description")
      .setTitle("Description")
  );
  section.addWidget(
    CardService.newTextInput()
      .setFieldName("Spreadsheet URL")
      .setTitle("Spreadsheet URL")
  );

  card.addSection(section);

  return [card.build()];
}
