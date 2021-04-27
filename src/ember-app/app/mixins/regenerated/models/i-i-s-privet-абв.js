import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гд: DS.attr('string'),
  хз: DS.attr('number')
});

export let ValidationRules = {
  гд: {
    descriptionKey: 'models.i-i-s-privet-абв.validations.гд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  хз: {
    descriptionKey: 'models.i-i-s-privet-абв.validations.хз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АбвE', 'i-i-s-privet-абв', {
    гд: attr('Гд', { index: 0 }),
    хз: attr('', { index: 1 })
  });

  modelClass.defineProjection('АбвL', 'i-i-s-privet-абв', {
    гд: attr('Гд', { index: 0 }),
    хз: attr('', { index: 1 })
  });
};
