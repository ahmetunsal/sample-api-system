# Generated by Django 5.1.4 on 2025-01-17 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_nav_urlpath'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='slug',
            field=models.SlugField(default='giris'),
        ),
    ]
