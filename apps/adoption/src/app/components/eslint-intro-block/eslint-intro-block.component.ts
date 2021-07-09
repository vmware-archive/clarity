import { Component, Input, OnInit } from '@angular/core';
import { ClarityESLintRule, EslintRulesService } from '../../services/eslint-rules.service';

@Component({
  selector: 'app-eslint-intro-block',
  templateUrl: './eslint-intro-block.component.html',
  styleUrls: ['./eslint-intro-block.component.scss'],
})
export class EslintIntroBlockComponent implements OnInit {
  @Input()
  ruleName: string;

  eslintRule: string = null;

  containsFixer = false;

  rule: ClarityESLintRule | undefined;

  constructor(private eslintRules: EslintRulesService) {}

  ngOnInit() {
    this.rule = this.eslintRules.getRule(this.ruleName);

    this.eslintRule = JSON.stringify(
      {
        rules: {
          [`@clr/clarity-adoption/${this.ruleName}`]: 'warn',
        },
      },
      null,
      2
    );
  }
}
