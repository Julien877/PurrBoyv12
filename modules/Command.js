class Command {
    constructor(
      client,
      {
        name = null,
        description = "Aucune description détéctée.",
        category = "Utilisateur",
        usage = "Aucune utilisation détéctée.",
        enabled = true,
        guildOnly = false,
        aliases = new Array(),
        permLevel = "Utilisateur"
      }
    ) {
      this.client = client;
      this.conf = { enabled, guildOnly, aliases, permLevel };
      this.help = { name, description, category, usage };
    }
  }
  
  module.exports = Command;
  