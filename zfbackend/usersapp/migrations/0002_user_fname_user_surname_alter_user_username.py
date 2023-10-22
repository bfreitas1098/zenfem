# Generated by Django 4.2.6 on 2023-10-22 15:27

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("usersapp", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="fname",
            field=models.CharField(default="", max_length=80),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="user",
            name="surname",
            field=models.CharField(default="", max_length=80),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="user",
            name="username",
            field=models.CharField(max_length=80, unique=True),
        ),
    ]
