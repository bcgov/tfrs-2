# -*- coding: utf-8 -*-
# Generated by Django 1.11.21 on 2019-07-18 14:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0160_auto_20190717_1830'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scheduledsheet',
            name='fuel_class',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.FuelClass'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='scheduledsheet',
            name='fuel_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.ApprovedFuel'),
            preserve_default=False,
        ),
    ]