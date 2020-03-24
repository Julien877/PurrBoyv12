module.exports = async (bot, member) => {
  let role = member.guild.roles.cache.get("559598136914608143");
  member.roles.add(role);
  const invites = [];
  member.guild.fetchInvites().then(invites => {
  const invite = invites.find(i => invites.get(i.code).uses);
  const inviter = invite.inviter
  const jchannel = member.guild.channels.cache.find(c => c.name === "welcome");
  return jchannel.send(`<@${member.user.id}> joined the server using the invite code: ${invite.code} and was invited by   ${inviter.tag}.\nThe invite was used ${invite.uses} times since it's original creation!`);
});
};