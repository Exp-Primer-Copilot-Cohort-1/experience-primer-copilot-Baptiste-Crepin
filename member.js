function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/member/skills/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMember',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}